import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md  mt-5 overflow-hidden md:max-w-3xl">
      <div className=" w-full h-52 relative overflow-hidden">
        <Image
          src={"/amba.png"}
          alt="Background Image"
          fill
          className="object-cover"
          quality={100}
        ></Image>
      </div>
      <div className="relative p-6">
        <div className="absolute -top-36 left-6">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={"/eu.png"}
              alt="Profile Image"
              className="object-cover w-full h-full"
              width={192}
              height={192}
              quality={100}
            />
          </div>
        </div>
        <div className="pt-10">
            <h2 className="text-2xl font-semibold text-gray-900">Aleh Araujo</h2>
            <p className="text-gray-600 mt-2">Full Stack Developer</p>
            <p className="mt-4 text-gray-700">
                Passionate about building web applications and learning new
                technologies. Always eager to take on new challenges and improve my
                skills.
            </p>
        </div>
      </div>
    </div>
  );
}
