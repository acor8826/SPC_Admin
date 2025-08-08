'use client';
import { Menu } from '@headlessui/react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import FullScreenButton from '../elements/FullScreenButton';
import Language from '../elements/Language';
import LogoutButton from '@/components/auth/LogoutButton'; // ✅ added

const ThemeSwitch = dynamic(() => import('../elements/ThemeSwitch'), {
  ssr: false,
});

export default function Header1({ scroll, isMobileMenu, handleSidebar, handleOffcanvas }) {
  return (
    <div className="header-dashboard">
      <div className="wrap">
        <div className="header-left">
          <Link href="/">
            <img
              id="logo_header_mobile"
              alt=""
              src="/images/logo/logo.png"
              data-light="images/logo/logo.png"
              data-dark="images/logo/logo-dark.png"
              data-width="154px"
              data-height="52px"
              data-retina="images/logo/logo@2x.png"
            />
          </Link>
          <div className="button-show-hide" onClick={handleSidebar}>
            <i className="icon-menu-left" />
          </div>
          <form className="form-search flex-grow">
            <fieldset className="name">
              <input
                type="text"
                placeholder="Search here..."
                className="show-search"
                name="name"
                tabIndex={2}
                aria-required="true"
                required
              />
            </fieldset>
            <div className="button-submit">
              <button type="submit">
                <i className="icon-search" />
              </button>
            </div>
          </form>
        </div>

        <div className="header-grid">
          <div className="header-item country">
            <Language />
          </div>
          <ThemeSwitch />
          <FullScreenButton />

          <div className="popup-wrap user type-header">
            <Menu as="div" className="dropdown">
              <Menu.Button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton3"
              >
                <span className="header-user wg-user">
                  <span className="image">
                    <img src="/images/avatar/user-1.png" alt="" />
                  </span>
                  <span className="flex flex-column">
                    <span className="body-title mb-2">Kristin Watson</span>
                    <span className="text-tiny">Admin</span>
                  </span>
                </span>
              </Menu.Button>

              <Menu.Items
                as="ul"
                className="dropdown-menu dropdown-menu-end has-content show d-flex end-0"
                aria-labelledby="dropdownMenuButton3"
              >
                <li>
                  <Link href="#" className="user-item">
                    <div className="icon">
                      <i className="icon-user" />
                    </div>
                    <div className="body-title-2">Account</div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="user-item">
                    <div className="icon">
                      <i className="icon-mail" />
                    </div>
                    <div className="body-title-2">Inbox</div>
                    <div className="number">27</div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="user-item">
                    <div className="icon">
                      <i className="icon-file-text" />
                    </div>
                    <div className="body-title-2">Taskboard</div>
                  </Link>
                </li>
                <li>
                  <Link href="/setting" className="user-item">
                    <div className="icon">
                      <i className="icon-settings" />
                    </div>
                    <div className="body-title-2">Setting</div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="user-item">
                    <div className="icon">
                      <i className="icon-headphones" />
                    </div>
                    <div className="body-title-2">Support</div>
                  </Link>
                </li>

                {/* ✅ Replace static link with dynamic logout */}
                <li>
                  <LogoutButton />
                </li>
              </Menu.Items>
            </Menu>
          </div>

          <div className="divider" />
          <div className="setting cursor-pointer" onClick={handleOffcanvas}>
            <i className="icon-settings" />
          </div>
        </div>
      </div>
    </div>
  );
}
