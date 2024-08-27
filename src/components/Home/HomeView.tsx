import BlogsView from '../Blogs/Main/BlogsView';
import SearchBar from '../Navbar/SearchBar';

const HomeView = () => {
  return (
    <>
      <SearchBar />
      <BlogsView />
    </>
  );
};

export default HomeView;
