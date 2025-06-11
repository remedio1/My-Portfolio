


type MenuItemProps = {  
  text: string;
  href: string; 
  icon?: React.ElementType;
};


const MenuItem: React.FC<MenuItemProps> = ({ text, href, icon: Icon }) => {
  return (
    <a
      href={href} 
      target = "_blank"
      rel="noopener noreferrer"
    >
      {Icon && <Icon className="text-2xl" />}
      <span className="uppercase hidden sm:inline text-sm">{text}</span>
    </a>
  );
      
}

export default MenuItem;

