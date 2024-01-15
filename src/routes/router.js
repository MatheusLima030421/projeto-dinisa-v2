import { Home } from "../pages/home";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import { LayoutApp } from "../templates/layout";
import { Dashboards } from "../pages/dashboards";

export const Router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route element={<LayoutApp />}>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<div>Not Found</div>} />
			</Route>
			<Route
				path="/analise-leads"
				element={
					<Dashboards
						urlDashboard={
							"https://app.powerbi.com/reportEmbed?reportId=150b2991-44e0-40cb-81ec-2c113f109e8a&autoAuth=true&ctid=952084a7-e64c-4d9a-bc00-e594dad4474b"
						}
					/>
				}
			/>
			  
			<Route
				path="/estoque-seminovos"
				element={
					<Dashboards
						urlDashboard={
							"https://app.powerbi.com/reportEmbed?reportId=69f9e633-eabd-4a79-8e6c-c0ab57df1c92&autoAuth=true&ctid=952084a7-e64c-4d9a-bc00-e594dad4474b"						}
					/>
				}
			/>
		</>
	)
);
