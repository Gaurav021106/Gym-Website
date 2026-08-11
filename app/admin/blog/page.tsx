"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Plus, Search, Edit2, Trash2, Image as ImageIcon, Save, X, LayoutDashboard, LogOut
} from "lucide-react";

// Initial dummy data
const defaultPosts = [
  { id: 1, title: "The Science Behind X-Training", category: "Workouts", date: "Aug 10, 2026", status: "Published", excerpt: "", content: "", image: "" },
  { id: 2, title: "Why You Can't Out-Train a Bad Diet", category: "Nutrition", date: "Aug 02, 2026", status: "Published", excerpt: "", content: "", image: "" },
  { id: 3, title: "Welcome to Our New Kaonli Branch!", category: "Announcements", date: "Jul 25, 2026", status: "Draft", excerpt: "", content: "", image: "" }
];

export default function AdminBlogDashboard() {
  const [posts, setPosts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  
  // Form State
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "", category: "", image: "", excerpt: "", content: "", status: "Draft"
  });

  // 1. DUMMY DATABASE: Load posts from LocalStorage on mount
  useEffect(() => {
    const savedPosts = localStorage.getItem("eddy_gym_posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      setPosts(defaultPosts);
      localStorage.setItem("eddy_gym_posts", JSON.stringify(defaultPosts));
    }
  }, []);

  // 2. DUMMY DATABASE: Save posts to LocalStorage whenever they change
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("eddy_gym_posts", JSON.stringify(posts));
    }
  }, [posts]);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenEditor = (post: any = null) => {
    if (post) {
      setEditingId(post.id);
      setFormData({ ...post });
    } else {
      setEditingId(null);
      setFormData({ title: "", category: "", image: "", excerpt: "", content: "", status: "Draft" });
    }
    setIsEditorOpen(true);
  };

  const handleCloseEditor = () => {
    setIsEditorOpen(false);
    setEditingId(null);
  };

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. CREATE & UPDATE LOGIC
  const handleSavePost = () => {
    if (!formData.title) return alert("Title is required!");

    if (editingId) {
      // Update existing post
      setPosts(posts.map(p => p.id === editingId ? { ...p, ...formData } : p));
    } else {
      // Create new post
      const newPost = {
        ...formData,
        id: Date.now(), // Generate a random ID
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
      };
      setPosts([newPost, ...posts]);
    }
    handleCloseEditor();
  };

  // 4. DELETE LOGIC
  const handleDelete = (id: number) => {
    if(confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = posts.filter(p => p.id !== id);
      setPosts(updatedPosts);
      localStorage.setItem("eddy_gym_posts", JSON.stringify(updatedPosts));
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col md:flex-row font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-white tracking-tight">
            EDDY<span className="text-red-500">ADMIN</span>
          </h2>
        </div>
        <nav className="flex-1 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600/10 text-red-500 font-medium transition-colors">
            <Edit2 size={20} /> Blog Manager
          </button>
        </nav>
        <button className="mt-auto flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-500 hover:text-red-500 hover:bg-red-500/10 transition-colors">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Blog Management</h1>
              <p className="text-zinc-400 text-sm">Create, edit, and manage your fitness content.</p>
            </div>
            <button 
              onClick={() => handleOpenEditor()}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-red-600/20"
            >
              <Plus size={20} /> New Post
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 mb-8 flex items-center gap-4">
            <Search className="text-zinc-500" size={20} />
            <input 
              type="text" 
              placeholder="Search posts..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-white w-full placeholder:text-zinc-600"
            />
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-400 text-sm">
                    <th className="p-5 font-medium">Post Title</th>
                    <th className="p-5 font-medium">Category</th>
                    <th className="p-5 font-medium">Date</th>
                    <th className="p-5 font-medium">Status</th>
                    <th className="p-5 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-zinc-800/50 transition-colors">
                      <td className="p-5 font-medium text-zinc-100">{post.title}</td>
                      <td className="p-5 text-zinc-400 text-sm">{post.category}</td>
                      <td className="p-5 text-zinc-400 text-sm">{post.date}</td>
                      <td className="p-5">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          post.status === 'Published' 
                            ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                            : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                        }`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="p-5 flex items-center justify-end gap-3">
                        <button 
                          onClick={() => handleOpenEditor(post)}
                          className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded-lg transition-colors"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button 
                          onClick={() => handleDelete(post.id)}
                          className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredPosts.length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-zinc-500">
                        No posts found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* EDITOR MODAL */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <h2 className="text-xl font-bold text-white">
                {editingId ? "Edit Post" : "Create New Post"}
              </h2>
              <button onClick={handleCloseEditor} className="text-zinc-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Post Title</label>
                <input 
                  type="text" 
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., 5 Ways to Maximize Muscle Growth" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Category</label>
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  >
                    <option value="">Select Category...</option>
                    <option value="Workouts">Workouts</option>
                    <option value="Nutrition">Nutrition</option>
                    <option value="Announcements">Announcements</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Cover Image URL</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      placeholder="/hero.png" 
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Excerpt (Short Description)</label>
                <textarea 
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Full Content</label>
                <textarea 
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={10}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors font-mono text-sm"
                />
              </div>
            </div>

            <div className="p-6 border-t border-zinc-800 flex items-center justify-between bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <span className="text-sm text-zinc-400">Status:</span>
                <select 
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-red-500"
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>
              
              <div className="flex gap-3">
                <button onClick={handleCloseEditor} className="px-6 py-2.5 rounded-lg font-medium text-zinc-300 hover:bg-zinc-800 transition-colors">
                  Cancel
                </button>
                <button onClick={handleSavePost} className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium bg-red-600 hover:bg-red-700 text-white transition-colors">
                  <Save size={18} /> Save Post
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}