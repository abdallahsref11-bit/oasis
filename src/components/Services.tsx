import React from 'react';
import { motion } from 'motion/react';
import { 
  Stethoscope, 
  Baby, 
  Activity, 
  HeartPulse, 
  FlaskConical, 
  Microscope,
  CreditCard,
  ShieldCheck
} from 'lucide-react';

const services = [
  {
    icon: <Stethoscope size={32} />,
    title: 'General Consultation',
    description: 'Expert medical diagnosis and treatment for various health conditions and minor illnesses.',
    tags: ['Safe Surgery', 'Walk-in'],
    color: 'blue'
  },
  {
    icon: <Baby size={32} />,
    title: 'Family Medicine',
    description: 'Comprehensive healthcare for families, including maternal care, pediatrics, and geriatric care.',
    tags: ['Child Care', 'Vaccinations'],
    color: 'emerald'
  },
  {
    icon: <FlaskConical size={32} />,
    title: 'PCR & Antigen Tests',
    description: 'Fast and accurate COVID-19 screening with results available via MySejahtera and Email.',
    tags: ['Drive-thru', 'Instant Results'],
    color: 'purple'
  },
  {
    icon: <HeartPulse size={32} />,
    title: 'Emergency Care',
    description: '24/7 immediate medical attention for urgent non-life-threatening injuries and conditions.',
    tags: ['24 Hours', 'Rapid Response'],
    color: 'rose'
  },
  {
    icon: <Microscope size={32} />,
    title: 'Health Screening',
    description: 'Deeper diagnostic tests, blood work, and full body checkups for preventive healthcare.',
    tags: ['Full Checkup', 'Blood Hub'],
    color: 'indigo'
  },
  {
    icon: <Activity size={32} />,
    title: 'Minor Surgery',
    description: 'Sterile and professional minor surgical procedures, stitches, and wound debridement.',
    tags: ['Sterile', 'Local Anesthesia'],
    color: 'amber'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-4 text-xs"
          >
            Compassionate Care
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight"
          >
            Our Essential Medical <br />
            Services for Ara Damansara
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1.5 bg-blue-500 rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2rem] border border-slate-100 hover:border-blue-100 hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 bg-white flex flex-col justify-between"
            >
              <div>
                <div className={`mb-6 inline-flex p-4 rounded-2xl bg-${service.color}-50 text-${service.color}-600 group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-6">
                  {service.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full uppercase tracking-wider group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 glass-card rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600 text-white rounded-full">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="font-bold text-blue-900">Insurance & TPA Accepted</p>
              <p className="text-xs text-slate-500 font-medium italic">We cover most major insurance panels in Malaysia</p>
            </div>
          </div>
          <div className="flex items-center gap-6 opacity-40 grayscale group hover:grayscale-0 transition-all">
            <CreditCard size={32} />
            <div className="font-serif font-black text-2xl italic tracking-tighter">AIA</div>
            <div className="font-serif font-black text-2xl italic tracking-tighter">PMCARE</div>
            <div className="font-serif font-black text-2xl italic tracking-tighter">MIYA</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
