const GoogleMaps = () => {
   return (
      <div style={{ display: "flex", justifyContent: "center" }}>
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.073806225622!2d-46.652234814621174!3d-23.565792575213734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbf9ff57%3A0x4ca8eb5c4f7ecca9!2sFIAP!5e0!3m2!1spt-BR!2sbr!4v1692385783576!5m2!1spt-BR!2sbr"
            width="100%"
            height={450}
            style={{ border: 0, borderRadius: 15, marginTop: 30 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
         />
      </div>
   );
};

export default GoogleMaps;
