import "../admin/all.css";
import "../admin/styles.css";
import AdminHeader from "../admin/components/partials/AdminHeader";
import AdminSidebar from "../admin/components/partials/AdminSidebar";
import AdminFooter from "../admin/components/partials/AdminFooter";

export const metadata = {
	title: "Lobby Lane",
	description: "Lobby Lane",
};

export default function RootLayout({ children }) {
	return (
		<div className='mx-auto bg-grey-400'>
			<div className='min-h-screen flex flex-col'>
				<AdminHeader />
				<div className='flex flex-1'>
					<AdminSidebar />

					<main className='bg-white-300 flex-1 p-3 overflow-hidden'>
						{children}
					</main>
				</div>
			</div>
		</div>
	);
}
