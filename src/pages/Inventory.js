import React, { useState, useEffect, useCallback } from "react";
import AnimatedPage from "../components/ui/AnimatedPage";
import PageHeader from "../components/ui/PageHeader";
import AnimatedCard from "../components/ui/AnimatedCard";
import Button from "../components/ui/Button";
import { Input, Label } from "../components/ui/Input";
import { useAuth } from "../AuthContext";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Inventory = () => {
  const { user } = useAuth();
  const storage = getStorage();

  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    image: null,
  });
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) =>
    setForm({ ...form, image: e.target.files[0] || null });

  const uploadImage = async (file) => {
    if (!file) return null;
    const storageRef = ref(storage, `productImages/${Date.now()}-${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const fetchProducts = useCallback(async () => {
    if (!user) return;
    const q = query(
      collection(db, "products"),
      where("farmerId", "==", user.uid)
    );
    const snap = await getDocs(q);
    setProducts(
      snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }))
    );
  }, [user]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = null;
      if (form.image) {
        imageUrl = await uploadImage(form.image);
      }

      if (editing) {
        await updateDoc(doc(db, "products", editing), {
          name: form.name,
          price: Number(form.price),
          quantity: Number(form.quantity),
          ...(imageUrl && { imageUrl }),
        });
        setEditing(null);
      } else {
        await addDoc(collection(db, "products"), {
          name: form.name,
          price: Number(form.price),
          quantity: Number(form.quantity),
          imageUrl,
          farmerId: user.uid,
          createdAt: new Date(),
        });
      }

      setForm({ name: "", price: "", quantity: "", image: null });
      fetchProducts();
    } catch (err) {
      console.error("Error saving product:", err);
    }
    setLoading(false);
  };

  const handleEdit = (p) => {
    setEditing(p.id);
    setForm({
      name: p.name,
      price: p.price,
      quantity: p.quantity,
      image: null,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <AnimatedPage>
      <PageHeader
        title="My Inventory"
        subtitle="Add and manage your listed produce."
      />

      <div className="grid gap-6 md:grid-cols-[1.1fr,1.3fr]">
        <AnimatedCard>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            {editing ? "Edit Product" : "Add Product"}
          </h3>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <Label>Product Name</Label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label>Price (₹ / kg)</Label>
                <Input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label>Quantity (kg)</Label>
                <Input
                  name="quantity"
                  type="number"
                  value={form.quantity}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label>Product Image (optional)</Label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="mt-1 text-sm text-slate-600 dark:text-slate-300"
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading
                ? "Saving..."
                : editing
                ? "Update Product"
                : "Add Product"}
            </Button>
          </form>
        </AnimatedCard>

        <AnimatedCard>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            Listed Products
          </h3>

          {products.length === 0 ? (
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              No products added yet.
            </p>
          ) : (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="rounded-lg border border-slate-200 dark:border-slate-700 p-3"
                >
                  {p.imageUrl && (
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="mb-2 h-32 w-full rounded-md object-cover"
                    />
                  )}
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50">
                    {p.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    ₹{p.price}/kg · {p.quantity} kg
                  </p>

                  <div className="mt-3 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(p)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleDelete(p.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </AnimatedCard>
      </div>
    </AnimatedPage>
  );
};

export default Inventory;
