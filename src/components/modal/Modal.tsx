import { Box } from "@mui/material";
import { ModalProps } from "./interface";

const Modal = ({openGame, setOpenGame}: ModalProps) => {
    return (
      <>
        {openGame && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            {/* Close Button */}
            <Box
              onClick={() => setOpenGame(false)}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                fontSize: "32px",
                color: "#fff",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              ✕
            </Box>

            {/* Iframe Container */}
            <Box
              sx={{
                width: "90vw",
                height: "90vh",
                background: "#000",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allowFullScreen
                title="game-frame"
              />
            </Box>
          </Box>
        )}
      </>
    );
}

export default Modal