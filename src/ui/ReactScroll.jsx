import { Element, Link } from 'react-scroll';

function ReactScroll() {
  return (
    <div className=" bg-red-200 font-semibold">
      <div>
        <Link
          activeClass="active"
          className="test1"
          to="test3"
          // spy={true}
          smooth={true}
          duration={500}
        >
          Test 3
        </Link>
      </div>
      <nav className=" bg-red-500">
        <div className="">
          <div className="" id="">
            <ul className="nav navbar-nav">
              <Link
                activeClass="active"
                className=" bg-red-500"
                to="test1"
                // spy={true}
                smooth={true}
                duration={500}
              >
                Test 1
              </Link>

              <Link to="test2" smooth={true} duration={500}>
                Test 2
              </Link>

              <Link
                activeClass="active"
                className="test3"
                to="test3"
                // spy={true}
                smooth={true}
                duration={500}
              >
                Test 3
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      <Element name="test1" className=" mt-10 h-[30rem]">
        test 1
      </Element>

      <Element name="test2" className=" mt-10 h-[30rem]">
        test 2
      </Element>

      <Element name="test3" className=" mt-10 h-[30rem]">
        test 3
      </Element>
    </div>
  );
}

export default ReactScroll;
