import { createBrowserRouter  } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from "./layouts/Default";
import { ErrorPage } from "./pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Timeline />
            },
            {
                path: '/status',
                element: <Status />
            },
            {
                path: '/notifications',
                element: <h1>Notificações</h1>
            }
        ],
        errorElement: <ErrorPage />
    }
])