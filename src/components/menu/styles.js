import { Menu } from "antd";
import styled from "styled-components";

export const MenuStyled = styled(Menu)`
	&.ant-menu-light {
		background: #1e4164 !important;

		.ant-menu-submenu {
			color: white;
			border-bottom: 0px;

			&:hover {
			}
		}

		.ant-menu-submenu-selected {
			color: grey !important;
			border-bottom: 2px solid gray;

			.ant-menu-submenu-title {
				color: grey !important;
				border-color: red;
			}
		}
	}
`;
