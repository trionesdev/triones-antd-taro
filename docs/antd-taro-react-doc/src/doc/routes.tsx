import {createHashRouter, RouteObject, RouterProvider} from "react-router-dom";
import {DocLayout} from "./layout/DocLayout";
import {GuideLayout} from "./guide/layout";

const routes: RouteObject[] = [{
  path: '/',
  element: <DocLayout/>, children: [
    {path: '/', element: <GuideLayout/>}
  ]
}]

export const AppRouter = () => {
  return <RouterProvider router={createHashRouter(routes)}/>;
};
