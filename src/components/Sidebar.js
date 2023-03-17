import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import sublinks from './data';
const Sidebar = () => {
  const { sidebarOpen, CloseSideBar } = useGlobalContext();
  return (
    <aside
      className={`${sidebarOpen ? 'sidebar_wrapper show' : 'sidebar_wrapper'}`}
    >
      <div className="sidebar">
        <button className="sidebar_close" onClick={CloseSideBar}>
          <FaTimes />
        </button>

        <div className="sidebar_links">
          {sublinks.map((linksitem, index) => {
            const { links, page } = linksitem;
            return (
              <article className="sidebar_links_article" key={index}>
                <h4 className="sidebar_links_h4">{page}</h4>
                <div className="sidebar_sublinks">
                  {links.map((link, index) => {
                    const { icon, label, url } = link;

                    return (
                      <a className="sidebar_sublinks_a" key={index} href={url}>
                        <span>{icon}</span>
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
