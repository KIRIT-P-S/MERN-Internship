import Navbar from "./components/Navbar";
import FormBuilder from "./components/FormBuilder";
import AIChat from "./components/AIChat";
import Editor from "./components/Editor";

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/3 border-r overflow-y-auto">
          <FormBuilder />
        </div>

        <div className="w-1/3 border-r overflow-y-auto">
          <Editor />
        </div>

        <div className="w-1/3">
          <AIChat />
        </div>
      </div>
    </div>
  );
}
