import { useState } from "react";
import { Upload, Phone, MessageCircle, Mail, MapPin, Users } from "lucide-react";

const ContactUs = () => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [agreed, setAgreed] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFileName(file ? file.name : null);
    };

    return (
        <div className="w-full bg-white px-4 py-10 md:px-8 lg:px-12">
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-start pt-30">
                    <div>
                        <p className="mb-2 text-[10px] font-semibold tracking-[0.55em] text-secondary">
                            CONTACT
                        </p>
                        <h1 className="text-2xl font-semibold leading-tight text-primary md:text-4xl">
                            We&apos;re here,
                            <br />
                            Let&apos;s Talk.
                        </h1>
                    </div>
                    <p className="max-w-[250px] text-[11px] leading-relaxed text-primary md:pt-1 md:text-right">
                        Whatever you need — a question, a complaint, a callback request,
                        or just directions to a branch — there is a fast route to the
                        right person below.
                    </p>
                </div>

                {/* Form + image */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_180px] max-w-4xl">
                    {/* Form */}
                    <form className="space-y-3">
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div >
                                <label className="mb-3 block text-xs font-medium text-primary">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    className="w-full rounded-md bg-[#F9F9FD] px-3 py-3 text-xs text-primary placeholder:text-primary focus:border-[#151544] focus:outline-none focus:ring-1 focus:ring-[#151544]"
                                />
                            </div>
                            <div>
                                <label className="mb-3 block text-xs font-medium text-primary">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="johndoe@email.com"
                                    className="w-full rounded-md  bg-[#F9F9FD] px-3 py-3 text-xs text-primary placeholder:text-primary focus:border-[#151544] focus:outline-none focus:ring-1 focus:ring-[#151544]"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div>
                                <label className="mb-3 block text-xs font-medium text-primary">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+234 567 8901"
                                    className="w-full rounded-md bg-[#F9F9FD] px-3 py-3 text-xs text-primary placeholder:text-primary focus:border-[#151544] focus:outline-none focus:ring-1 focus:ring-[#151544]"
                                />
                            </div>
                            <div>
                                <label className="mb-3 block text-xs font-medium text-primary">
                                    Topic
                                </label>
                                <select
                                    defaultValue=""
                                    className="w-full rounded-md  bg-[#F9F9FD] px-3 py-3 text-xs text-primary placeholder:text-primary focus:border-[#151544] focus:outline-none focus:ring-1 focus:ring-[#151544]"
                                >
                                    <option value="" disabled>
                                        Select
                                    </option>
                                    <option value="account">Account</option>
                                    <option value="complaint">Complaint</option>
                                    <option value="callback">Callback request</option>
                                    <option value="branch">Branch directions</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="mb-3 block text-xs font-medium text-primary">
                                Subject
                            </label>
                            <input
                                type="text"
                                placeholder="+234 567 8901"
                                className="w-full rounded-md bg-[#F9F9FD] px-3 py-3 text-xs text-primary placeholder:text-primary focus:border-[#151544] focus:outline-none focus:ring-1 focus:ring-[#151544]"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-xs font-medium text-primary">
                                Your Message
                            </label>
                            <textarea
                                placeholder="+234 567 8901"
                                rows={3}
                                className="w-full rounded-md  bg-[#F9F9FD] px-3 py-3 text-xs text-primary placeholder:text-primary focus:border-[#151544] focus:outline-none focus:ring-1 focus:ring-[#151544]"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-xs font-medium text-primary">
                                Attachment (Optional, Max 5MB)
                            </label>
                            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-primary bg-white px-3 py-6 text-center hover:bg-slate-50">
                                <Upload className="mb-1.5 h-3.5 w-3.5 text-slate-400" />
                                <span className="text-[11px] text-slate-400">
                                    {fileName ?? "PDF, JPG or PNG, max 5MB"}
                                </span>
                                <input
                                    type="file"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>

                        <label className="flex items-center gap-2 text-xs text-primary">
                            <input
                                type="checkbox"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="h-3.5 w-3.5 rounded border-slate-300 text-primary focus:ring-[#151544]"
                            />
                            I am not a robot (security check)
                        </label>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-primary py-3.5 text-sm font-light text-white transition hover:bg-[#0f0f34]"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Image panel */}
                    <div className="relative hidden overflow-hidden rounded-xl lg:flex lg:items-end lg:justify-center        bg-gradient-to-b from-white via-[#e7e3f6] to-[#c9c2e8] w-[200px] sm:w-[250px] border border-gray-50">

                        {/* Logo badge */}
                        <div className="absolute inset-x-0 top-6 flex justify-center z-10">
                            <div className="flex items-center rounded-full  bg-gray-100 backdrop-blur-md pr-2 sm:pr-3 lg:pr-4 p-0.5 border border-gray-100 w-28 sm:w-32 md:w-36 lg:w-40">
                                    {/* Logo Circle */}
                                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full">
                                        <img
                                            src="/logo2.jpg"
                                            alt="Alert MFB"
                                            className="h-5 w-5 sm:h-6 sm:w-6 lg:h7 lg:w-7 object-fit rounded-full"
                                        />
                                    </div>

                                    {/* Text */}
                                    <span className="ml-1.5 sm:ml-2 text-[10px] sm:text-xs lg:text-sm font-medium text-primary">
                                        Alert MFB
                                    </span>
                                </div>
                        </div>

                        {/* Photo - Stretched to fill, no white space */}
                        <img
                            src="/woman.png"
                            alt="Customer smiling while using phone to chat with support"
                            className="h-full  object-cover object-center object-bottom mt-10 sm:pt-35"
                        />
                    </div>
                </div>

                {/* Footer contact options */}
                <div className="mt-12 sm:mt-25 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <FooterCard
                        icon={<Phone className="h-3.5 w-3.5" />}
                        title="Phone"
                        primary="0800 - ALERT-MFB"
                        secondary="Mon - Fri: 8am - 6pm  |  Sat: 9am - 5pm"
                        cta="Call Now"
                    />
                    <FooterCard
                        icon={<MessageCircle className="h-3.5 w-3.5" />}
                        title="Live Chat"
                        primary="Average Wait: 2 Mins"
                        secondary="During Working Hours"
                        cta="Start Chat"
                    />
                    <FooterCard
                        icon={<Mail className="h-3.5 w-3.5" />}
                        title="Email"
                        primary="support@alertmfb.com.ng"
                        secondary="We respond within 24 hours"
                        cta="Send Email"
                    />
                    <FooterCard
                        icon={<MapPin className="h-3.5 w-3.5" />}
                        title="Visit a Branch"
                        primary="40+ Locations Nationwide"
                        secondary="Find the one nearest you"
                        cta="Locate Branch"
                    />
                </div>
            </div>
        </div>
    );
};

const FooterCard = ({
    icon,
    title,
    primary,
    secondary,
    cta,
}: {
    icon: React.ReactNode;
    title: string;
    primary: string;
    secondary: string;
    cta: string;
}) => (
    <div className="flex flex-col items-center text-center">
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-md bg-[#E7ECF4] text-primary">
            {icon}
        </div>
        <p className="mb-4 text-xs font-light text-primary">{title}</p>
        <p className="text-xs font-light text-primary mb-3">{primary}</p>
        <p className="mb-3.5 text-[10px] font-light text-gray-400">{secondary}</p>
        <button className="flex items-center gap-1.5 rounded-full border border-primary px-3.5 py-1.5 text-[11px] font-medium text-primary transition hover:bg-slate-50">
            <Users className="h-3 w-3" />
            {cta}
        </button>
    </div>
);

export default ContactUs;