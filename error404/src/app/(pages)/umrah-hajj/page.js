import Navbar from "@/app/components/Navbar";

const umrahHajj = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen pt-40">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/K73Qome3hkk?si=pXATZ70mhNnmL5Hy"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="mx-auto"
        ></iframe>
      </div>
    </div>
  );
};

export default umrahHajj;
