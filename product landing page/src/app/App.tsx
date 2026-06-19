import { Leaf, RefreshCw, Sprout, Droplets, Package, Award, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-[#FAFAF8] to-[#F5F5DC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:px-12 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#A5D6A7]/20 px-4 py-2 rounded-full">
                <Leaf className="w-4 h-4 text-[#2E7D32]" />
                <span className="text-sm text-[#2E7D32]">100% Eco-Friendly</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-semibold text-[#2c3e2c] leading-tight">
                Write Green.<br />Save the Planet.
              </h1>
              <p className="text-lg text-[#2c3e2c]/70 max-w-md">
                Experience sustainable writing with our premium bamboo pens. Refillable, biodegradable, and completely plastic-free.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-[#2E7D32] text-white rounded-full hover:bg-[#1B5E20] transition-colors shadow-lg hover:shadow-xl">
                  Buy Now
                </button>
                <button className="px-8 py-4 border-2 border-[#2E7D32] text-[#2E7D32] rounded-full hover:bg-[#2E7D32] hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#4CAF50]/10 rounded-full blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBwZW4lMjBzdXN0YWluYWJsZSUyMGVjb3xlbnwxfHx8fDE3NzA3MDQxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Eco-friendly bamboo pen"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621448835648-fe3488ada89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwd2FzdGUlMjBwb2xsdXRpb24lMjBvY2VhbnxlbnwxfHx8fDE3NzA3MDQxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Plastic waste pollution"
                className="rounded-3xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-semibold text-[#2c3e2c]">
                The Plastic Pen Problem
              </h2>
              <p className="text-lg text-[#2c3e2c]/70 leading-relaxed">
                Every year, over <span className="text-[#2E7D32] font-semibold">4 billion plastic pens</span> end up in landfills and oceans. These pens take centuries to decompose, releasing harmful toxins into our environment.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="text-3xl font-semibold text-[#2E7D32]">400+</div>
                  <div className="text-sm text-[#2c3e2c]/60">Years to decompose</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-semibold text-[#2E7D32]">4B+</div>
                  <div className="text-sm text-[#2c3e2c]/60">Pens in landfills yearly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5DC] to-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-semibold text-[#2c3e2c]">
              Why Choose Our Eco-Pen?
            </h2>
            <p className="text-lg text-[#2c3e2c]/70 max-w-2xl mx-auto">
              Every feature is designed with sustainability in mind, without compromising on quality or performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#A5D6A7] rounded-2xl flex items-center justify-center mb-6">
                <Sprout className="w-8 h-8 text-[#2E7D32]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2c3e2c] mb-4">
                Sustainable Material
              </h3>
              <p className="text-[#2c3e2c]/70 leading-relaxed">
                Crafted from 100% natural bamboo and recycled paper. Grows 10x faster than trees and requires no pesticides.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#A5D6A7] rounded-2xl flex items-center justify-center mb-6">
                <RefreshCw className="w-8 h-8 text-[#2E7D32]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2c3e2c] mb-4">
                Refillable Ink
              </h3>
              <p className="text-[#2c3e2c]/70 leading-relaxed">
                Long-lasting refillable cartridges reduce waste by 90%. One pen can replace dozens of disposable ones.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#A5D6A7] rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-[#2E7D32]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2c3e2c] mb-4">
                Biodegradable
              </h3>
              <p className="text-[#2c3e2c]/70 leading-relaxed">
                Completely plastic-free and biodegradable. Returns to earth within 6 months, leaving zero toxic residue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It's Made */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-semibold text-[#2c3e2c]">
              Our Eco-Friendly Process
            </h2>
            <p className="text-lg text-[#2c3e2c]/70 max-w-2xl mx-auto">
              From forest to finished product, every step is sustainable and ethical.
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#A5D6A7] via-[#4CAF50] to-[#2E7D32] transform -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {/* Step 1 */}
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#A5D6A7] to-[#4CAF50] rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Sprout className="w-10 h-10 text-white" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="inline-block px-3 py-1 bg-[#A5D6A7] text-[#2E7D32] rounded-full text-sm mb-4">
                    Step 1
                  </div>
                  <h3 className="text-xl font-semibold text-[#2c3e2c] mb-3">
                    Sustainable Harvesting
                  </h3>
                  <p className="text-[#2c3e2c]/70">
                    Bamboo is harvested from certified sustainable farms, ensuring regrowth and forest health.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Droplets className="w-10 h-10 text-white" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="inline-block px-3 py-1 bg-[#4CAF50] text-white rounded-full text-sm mb-4">
                    Step 2
                  </div>
                  <h3 className="text-xl font-semibold text-[#2c3e2c] mb-3">
                    Chemical-Free Processing
                  </h3>
                  <p className="text-[#2c3e2c]/70">
                    Natural processes and eco-friendly treatments preserve the bamboo's integrity and strength.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Package className="w-10 h-10 text-white" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="inline-block px-3 py-1 bg-[#2E7D32] text-white rounded-full text-sm mb-4">
                    Step 3
                  </div>
                  <h3 className="text-xl font-semibold text-[#2c3e2c] mb-3">
                    Eco-Packaging
                  </h3>
                  <p className="text-[#2c3e2c]/70">
                    Packaged in 100% recycled materials with plant-based inks and biodegradable wrapping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5DC] to-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-semibold text-[#2c3e2c]">
              Loved by Eco-Warriors
            </h2>
            <p className="text-lg text-[#2c3e2c]/70 max-w-2xl mx-auto">
              Join thousands of students and professionals making a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1701889297494-16eb5bc8dca6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBub3RlYm9vayUyMGRlc2t8ZW58MXx8fHwxNzcwNzA0MTcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student testimonial"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#2c3e2c]">Sarah Chen</h4>
                  <p className="text-sm text-[#2c3e2c]/60">Environmental Science Student</p>
                </div>
              </div>
              <p className="text-[#2c3e2c]/70 leading-relaxed mb-4">
                "I love that I can take notes guilt-free! The pen writes smoothly, and knowing it's helping the planet makes me feel good about every word I write."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Leaf key={i} className="w-5 h-5 text-[#4CAF50] fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762341113148-41a938d2e957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdyaXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzcwNzA0MTcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional testimonial"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#2c3e2c]">Michael Torres</h4>
                  <p className="text-sm text-[#2c3e2c]/60">Marketing Director</p>
                </div>
              </div>
              <p className="text-[#2c3e2c]/70 leading-relaxed mb-4">
                "Switched our entire office to these pens. They're professional, sustainable, and the team loves them. It's a small change with a big environmental impact."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Leaf key={i} className="w-5 h-5 text-[#4CAF50] fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1692840662776-abd904fcc2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBmb3Jlc3QlMjBuYXR1cmUlMjBncmVlbnxlbnwxfHx8fDE3NzA3MDQxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Bamboo forest"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Switch to Sustainability Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the green writing revolution. Every pen makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-white text-[#2E7D32] rounded-full hover:bg-[#F5F5DC] transition-colors shadow-xl hover:shadow-2xl">
              Shop Now - $12.99
            </button>
            <button className="px-10 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors">
              View Bulk Pricing
            </button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-white">
              <div className="text-3xl font-semibold mb-2">50K+</div>
              <div className="text-sm text-white/80">Happy Customers</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-semibold mb-2">100K+</div>
              <div className="text-sm text-white/80">Pens Sold</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-semibold mb-2">2M kg</div>
              <div className="text-sm text-white/80">Plastic Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c3e2c] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-semibold">EcoPen</span>
              </div>
              <p className="text-white/70 text-sm">
                Writing the future, sustainably.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-[#4CAF50] transition-colors">Eco Pens</a></li>
                <li><a href="#" className="hover:text-[#4CAF50] transition-colors">Refill Cartridges</a></li>
                <li><a href="#" className="hover:text-[#4CAF50] transition-colors">Gift Sets</a></li>
                <li><a href="#" className="hover:text-[#4CAF50] transition-colors">Bulk Orders</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-[#4CAF50] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#4CAF50] transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-[#4CAF50] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#4CAF50] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold mb-4">Certifications</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#4CAF50]" />
                  <span className="text-sm text-white/70">FSC Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#4CAF50]" />
                  <span className="text-sm text-white/70">Carbon Neutral</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#4CAF50]" />
                  <span className="text-sm text-white/70">B Corp Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2026 EcoPen. All rights reserved. Made with 🌱 for the planet.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4CAF50] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4CAF50] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4CAF50] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4CAF50] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
