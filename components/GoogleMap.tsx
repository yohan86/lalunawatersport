export default function GoogleMap() {

  return (
    <div className="w-full space-y-3">

      <div className="w-full h-[300px] md:h-[400px] overflow-hidden shadow-lg">
        <iframe
          title="Laluna Water Sports Location"
          // Using query search mode forces Google to drop a red pin directly on the business
          src="https://maps.google.com/maps?q=Laluna%20Water%20Sports%20Bentota&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      
    </div>
  );
}