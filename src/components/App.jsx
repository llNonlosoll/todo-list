import { Layout } from './LayoutComponent/Layout';
import { AppBar } from './AppBarComponent/AppBar';
import { TaskForm } from './TaskFormComponent/TaskForm';
import { TaskList } from './TaskListComponent/TaskList';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
