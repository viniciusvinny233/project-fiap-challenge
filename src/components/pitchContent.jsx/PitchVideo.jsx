const PitchVideo = () => {
   return (
      <div className="conteudo-centro conteudo-centro-p">
         <div className="publish-button" style={{ verticalAlign: "middle", display: "flex" }}>
            <div
            className="pitch-title"
               style={{
                  alignSelf: "center",
                  marginBottom: 30,
                  fontFamily: '"Poppins", sans-serif',
                  color: "#D9D9D9",
                  fontWeight: "bold",
               }}
            >
               Vídeo Pitch
            </div>
         </div>
         <iframe
            className="video-iframe"
            width={800}
            height={450}
            src="https://www.youtube.com/embed/GSrMtgEoBgs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: 20, border: "0" }}
         />
      </div>
   );
};

export default PitchVideo;
