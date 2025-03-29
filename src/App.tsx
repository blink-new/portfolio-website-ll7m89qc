
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const projects = [
  {
    title: 'Brand Evolution',
    client: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800',
    category: 'Branding',
  },
  {
    title: 'Digital Experience',
    client: 'Innovate Co',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    category: 'Web Design',
  },
  {
    title: 'Modern Interface',
    client: 'Future Labs',
    image: 'https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?w=800',
    category: 'UI/UX',
  },
];

const services = [
  {
    title: 'Brand Strategy',
    description: 'Developing unique brand identities that stand out in the market.',
  },
  {
    title: 'Digital Design',
    description: 'Creating intuitive and engaging digital experiences.',
  },
  {
    title: 'Web Development',
    description: 'Building modern, responsive websites and applications.',
  },
];

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-32 pb-16 px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <motion.h1 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            We create
            <br />
            modern designs
            <br />
            that inspire
          </motion.h1>
          <div className="mt-12 flex items-center gap-4">
            <a href="/contact" className="group inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Start a Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600">{project.client}</p>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center justify-between">
                  {service.title}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. We're here to turn your vision into reality.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
          >
            Get in Touch
            <ArrowRight />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}