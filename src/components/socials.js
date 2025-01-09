import { LinkedInLogoIcon, GitHubLogoIcon, FileTextIcon } from "@radix-ui/react-icons";

const Socials = () => {
  const icons = [
    {
      href: "https://www.linkedin.com/in/trent-ho-b8320120b/",
      icon: <LinkedInLogoIcon className="w-8 h-8 text-blue-700 hover:text-blue-500" />,
      title: "LinkedIn",
    },
    {
      href: "https://github.com/trentho",
      icon: <GitHubLogoIcon className="w-8 h-8 text-black hover:text-gray-500" />,
      title: "GitHub",
    },
    {
      href: "/Trent Ho Resume.pdf",
      icon: <FileTextIcon className="w-8 h-8 text-gray-700 hover:text-gray-500" />,
      title: "Resume",
    },
  ];

  return (
    <div className="flex flex-row mt-5 gap-5 justify-center">
    {icons.map(({ href, icon, title }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        key={title}
        className="animate__animated animate__fadeIn animate__delay-3s" // Animation added here
      >
          <div className="text-[#354259] w-8 h-8 hover:text-gray-500/75 transition duration-300 ease-in-out">
            {icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Socials;
