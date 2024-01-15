import {
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuStyled } from "./styles";

export const Menu = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const handleOpenNewTab = (path) => {
		window.open(path, '_blank');
	  };
	const items = [
		{
			label: "Pós-Vendas",
			key: "1",
			children: [
				{
					type: "group",
					label: "Escolha o Dashboard",

					children: [
						{ label: "Central de Agendamentos", key: "1.1" },
						{ label: "Dinisa Day", key: "1.2" },
						{ label: "Agenda Inteligente", key: "1.3" },
					],
				},
			],
		},
		{
			label: "Vendas",
			key: "2",
			children: [
				{
					type: "group",
					label: "Escolha o Dashboard",

					children: [
						{
							label: "Análise de Leads",
							key: "2.1",
							onClick: () => {
								handleOpenNewTab("/analise-leads");
							},
						},
						{ label: "Estoque Seminovos",key: "2.2",
						onClick: () => {
							handleOpenNewTab("/estoque-seminovos");
						}, },
						{ label: "Fluxo de Estoque", key: "2.3" },
						{ label: "Vendas Showroom", key: "2.4" },
					],
				},
			],
		},
		{
			label: "Qualidade",
			key: "3",
			children: [
				{
					type: "group",
					label: "Escolha o Dashboard",

					children: [
						{ label: "Renault Niterói", key: "3.1" },
						{ label: "Renault São Gonçalo", key: "3.2" },
						{ label: "Nissan Niterói", key: "3.3" },
						{ label: "Jeep/RAM", key: "3.4" },
						{ label: "Peugeot e Citroen", key: "3.5" },
					],
				},
			],
		},
	];

	
	return (
		<MenuStyled
			mode="horizontal"
			items={items}
		/>
	);
};
