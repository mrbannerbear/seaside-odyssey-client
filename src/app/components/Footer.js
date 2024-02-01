import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
<footer class="bg-red-200 p-8">
  <div class="container mx-auto flex flex-wrap justify-around">

    <div class="w-full sm:w-auto mb-4 sm:mb-0">
      <h4 class="text-lg font-bold mb-2">About Us</h4>
      <p class="text-gray-600 w-56">Seaside Odyssey offers luxurious cruise ship voyages to exotic destinations around the world.</p>
    </div>

    <div class="w-full sm:w-auto mb-4 sm:mb-0">
      <h4 class="text-lg font-bold mb-2">Links</h4>
      <ul class="list-none p-0">
        <li><a href="#" class="text-gray-600 hover:text-black">Legal</a></li>
        <li><a href="#" class="text-gray-600 hover:text-black">Careers</a></li>
        <li><a href="#" class="text-gray-600 hover:text-black">Terms of Service</a></li>
        <li><a href="#" class="text-gray-600 hover:text-black">Privacy Policy</a></li>
        <li><a href="#" class="text-gray-600 hover:text-black">Notice</a></li>
      </ul>
    </div>

    <div class="w-full sm:w-auto mb-4 sm:mb-0">
      <h4 class="text-lg font-bold mb-2">Contact Us</h4>
      <p class="text-gray-600">Email: info@seasideodyssey.com</p>
      <p class="text-gray-600">Phone: 1-800-555-1234</p>

    </div>

    <div class="w-full sm:w-auto">
      <h4 class="text-lg font-bold mb-2">Follow Us</h4>
      <ul class="list-none p-0">
        <li class="inline-block mr-4">
          <a href="#" class="text-gray-600 text-xl hover:text-black"><FaFacebook/></a>
        </li>
        <li class="inline-block mr-4">
          <a href="#" class="text-gray-600 text-xl hover:text-black"><BsTwitterX/></a>
        </li>
        <li class="inline-block mr-4">
          <a href="#" class="text-gray-600 text-xl hover:text-black"><FaInstagram/></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="text-center text-xs text-gray-600 pt-8">
    © {new Date().getFullYear()} Seaside Odyssey. All rights reserved
  </div>
</footer>


    );
};

export default Footer;