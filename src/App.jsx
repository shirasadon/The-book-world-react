import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Signup from "./pages/signUp";
import Login from "./pages/logIn";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishList";
import AddBookToStore from "./pages/addBookToStore";
import Pageheader from "./components/pageHeader";
import Footer from "./components/footer";
import Logout from "./pages/logout";
import Signupbiz from "./pages/signupBiz";
import Books from "./pages/books";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRout from "./components/protectedRoute";
import BusinessAccessTickets from "./pages/BusinessAccessTickets";
import DeleteBook from "./components/deleteBook";
import Addbooktocart from "./components/addbooktocart";
import Editbook from "./components/editbook";
function App() {
  const backgroundApp = {
    backgroundColor: "#d5f0f6",
  };
  return (
    <div style={backgroundApp} className="App">
      <ToastContainer></ToastContainer>
      <header>
        <Navbar />
      </header>
      <h1 style={{ fontFamily: "cursive", color: "#bf2b7a", fontSize: "55px" }}>
        The book world
      </h1>
      <Pageheader></Pageheader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signUp" element={<Signup redirect="/login" />} />
        <Route
          path="/login"
          element={<Login redirect="/" redirectBiz="/addBookToStore" />}
        />
        <Route path="/logout" element={<Logout redirect="/" />} />
        <Route
          path="/signupbiz"
          element={<Signupbiz redirect="/addBookToStore" />}
        />
        <Route
          path="/businessaccesstickets"
          element={<BusinessAccessTickets />}
        />
          <Route path="/book" element={<Books />} />
         <Route path="/book/:id" element={<DeleteBook />} />
        <Route path="/editbook" element={<Editbook />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addbooktocart" element={<Addbooktocart />} />
        <Route
          path="/addBookToStore"
          element={
            <ProtectedRout>
              <AddBookToStore />
            </ProtectedRout>
          }
        />
      
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
