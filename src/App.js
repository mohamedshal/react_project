/* eslint-disable no-unused-vars */
import "./App.css";
import ChatPerson from "./Components/ChatPerson/ChatPerson.jsx";
import Content from "./Components/Content/Content";
import ContentChat from "./Components/ContentChat/ContentChat.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
	const routers = createBrowserRouter([
		{ path: "/", element: <Content /> },
		{ path: "/contentChat", element: <ContentChat /> },
		{ path: "/chatPerson", element: <ChatPerson /> },
	]);

	return (
		<>
			<RouterProvider router={routers} />;
		</>
	);
}

export default App;
