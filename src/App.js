import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./components/User.jsx";
import { PostList } from "./components/Post.jsx";
import { PostEdit } from "./components/EditPost.jsx";
import { PostCreate } from "./components/CreatePost.jsx";

import Admins from "./components/Admins.jsx";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource name="Admin" list={Admins} />
  </Admin>
);

export default App;
