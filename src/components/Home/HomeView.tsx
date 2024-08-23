import BlogsView from '../Blogs/BlogsView';
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
