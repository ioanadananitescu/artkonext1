import Card from "./Card";

const ArtistCard = ({ name, desc, data}) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>Artist {name} work </span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <Card 
            key={post._id}
            post={post}
          
          />
        ))}
      </div>
    </section>
  );
};

export default ArtistCard;