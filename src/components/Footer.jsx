import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <footer className="bg-[#DDC7BB] mt-4">
            <div className="p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <img src={logo} className="ml-2 me-3" alt="Logo" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase" style={{ color: '#1E1E1E' }}>Resources</h2>
                            <ul className="font-medium" style={{ color: '#1E1E1E' }}>
                                <li className="mb-4">
                                    <a target='_blank' href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                                </li>
                                <li>
                                    <a target='_blank' href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase" style={{ color: '#1E1E1E' }}>Follow</h2>
                            <ul className="font-medium" style={{ color: '#1E1E1E' }}>
                                <li className="mb-4">
                                    <a target='_blank' href="https://github.com/haseebabid72" className="hover:underline">Github</a>
                                </li>
                                <li>
                                    <a target='_blank' href="https://www.instagram.com/activator.senpai" className="hover:underline">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase" style={{ color: '#1E1E1E' }}>Legal</h2>
                            <ul className="font-medium" style={{ color: '#1E1E1E' }}>
                                <li className="mb-4">
                                    <a href="" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center" style={{ color: '#1E1E1E' }}>
                        © 2024 <a href="https://github.com/haseebabid72" className="hover:underline">Dwello™</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
