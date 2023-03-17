import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from './Context';
const Submenu = () => {
  const {
    submenuOpen,
    location,

    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setcolumns] = useState('submenu show col-2');

  useEffect(() => {
    setcolumns('subemnu show col-2');
    let sub = container.current;
    const { center, bottom } = location;

    sub.style.left = `${center}px`;
    sub.style.bottom = `${bottom}px`;

    if (links.length === 2) {
      setcolumns(' submenu show col-2');
    }

    if (links.length === 3) {
      setcolumns(' submenu show col-3');
    }
    if (links.length > 3) {
      setcolumns('submenu show col-4');
    }
  }, [location, links]);

  return (
    <aside
      ref={container}
      className={`${submenuOpen ? columns : 'submenu col-2'}`}
    >
      <h4>{page}</h4>
      <div className="submenu_div">
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a className="submenu_a" key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
