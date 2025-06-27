import { useState } from "react";

const ASL_ALPHABET = [
  { letter: "A", description: "Fist with thumb on the side.", image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Sign_language_A.svg" },
  { letter: "B", description: "Flat hand, fingers together, thumb across palm.", image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Sign_language_B.svg" },
  { letter: "C", description: "Hand forms a C shape.", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Sign_language_C.svg" },
  { letter: "D", description: "Index finger up, rest form a circle.", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sign_language_D.svg" },
  { letter: "E", description: "Fingers curled, thumb across.", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Sign_language_E.svg" },
  { letter: "F", description: "Index and thumb in circle, others extended.", image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Sign_language_F.svg" },
  { letter: "G", description: "Index and thumb parallel to ground.", image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Sign_language_G.svg" },
  { letter: "H", description: "Index and middle fingers extended.", image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Sign_language_H.svg" },
  { letter: "I", description: "Little finger up, rest folded.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Sign_language_I.svg" },
  { letter: "J", description: "Little finger draws a J.", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Sign_language_J.svg" },
  { letter: "K", description: "Index and middle fingers up, thumb between.", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Sign_language_K.svg" },
  { letter: "L", description: "Index up, thumb out forming L.", image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Sign_language_L.svg" },
  { letter: "M", description: "Thumb under three fingers.", image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Sign_language_M.svg" },
  { letter: "N", description: "Thumb under two fingers.", image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sign_language_N.svg" },
  { letter: "O", description: "Fingers form an O.", image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Sign_language_O.svg" },
  { letter: "P", description: "Like K, pointed down.", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Sign_language_P.svg" },
  { letter: "Q", description: "Like G, pointed down.", image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Sign_language_Q.svg" },
  { letter: "R", description: "Index and middle fingers crossed.", image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Sign_language_R.svg" },
  { letter: "S", description: "Fist with thumb across.", image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Sign_language_S.svg" },
  { letter: "T", description: "Thumb between index and middle.", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sign_language_T.svg" },
  { letter: "U", description: "Index and middle together, pointing up.", image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Sign_language_U.svg" },
  { letter: "V", description: "Index and middle form V.", image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Sign_language_V.svg" },
  { letter: "W", description: "Three fingers up.", image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Sign_language_W.svg" },
  { letter: "X", description: "Index finger bent.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Sign_language_X.svg" },
  { letter: "Y", description: "Thumb and little finger out.", image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Sign_language_Y.svg" },
  { letter: "Z", description: "Draw Z shape with index.", image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Sign_language_Z.svg" }
];

export default function ASLChart() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">ASL Alphabet Learning Tool</h1>

      <div className="grid grid-cols-6 gap-4">
        {ASL_ALPHABET.map((sign) => (
          <div
            key={sign.letter}
            className="bg-white border rounded-xl shadow hover:shadow-lg p-4 text-center cursor-pointer"
            onClick={() => setSelected(sign)}
          >
            <p className="text-xl font-bold">{sign.letter}</p>
            <img src={sign.image} alt={`ASL ${sign.letter}`} className="w-16 h-16 mx-auto mt-2" />
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm text-center">
            <h2 className="text-2xl font-bold mb-2">Sign: {selected.letter}</h2>
            <img src={selected.image} alt={selected.letter} className="w-24 h-24 mx-auto mb-4" />
            <p className="mb-4">{selected.description}</p>
            <button
              onClick={() => setSelected(null)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
