import { MENU_PROPS, FOOTER_PROPS } from '@/settings.tsx';

import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router';
import { routes as publicRoutes } from '@/routes/routes';
import { AnchorProvider, Layout, Header } from '@charitypro/ui-kit';

function LayoutWrapper() {
	return <AnchorProvider LinkElement={({ href, ...props }) => {
		return <Link {...props} to={href as string} />
	}}>
		<Layout
			headerSettings={MENU_PROPS}
			footerSettings={FOOTER_PROPS}
			user={<Header.GuestUser
				signUpLink={'/registration'}
				signInLink={() => console.log('sign-in')}
			/>}
		>
			<Outlet />
		</Layout>
	</AnchorProvider>;
}

const router = createBrowserRouter([
	{
		element: <LayoutWrapper />,
		children: publicRoutes
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
