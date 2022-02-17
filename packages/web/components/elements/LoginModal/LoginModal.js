import Link from "next/link";
import PropTypes from "prop-types";

import { ButtonEl, ButtonLink } from "../Button/Button";
import * as S from "./LoginModal.styles";
import { UEFALogo } from "./UEFALogo";

export function LoginModal({ status, denyAccess, setDenyAccess }) {
  let content = null;

  if (denyAccess) {
    content = (
      <>
        <p>You're not authorised to view this page</p>
        <p>
          Maybe it exists, maybe it doesn't. The point is, you don't have access
          to it.
        </p>
        <ButtonEl
          label="Return to login screen"
          onClick={() => setDenyAccess(false)}
        />
        <small>
          <a href="mailto:hey@modular-everything.com?subject=Need help logging in to UEFA Dashboard">
            Need help?
          </a>

          {status === "authenticated" && (
            <>
              <span>&bull;</span>
              <Link href="/api/auth/signout">
                <a>Clear auth token</a>
              </Link>
            </>
          )}
        </small>
      </>
    );
  }

  if (status === "unauthenticated" && !denyAccess) {
    content = (
      <>
        <form>
          <label htmlFor="email">
            <span id="emailLabel">Email Address</span>
            <input
              id="email"
              aria-labelledby="emailLabel"
              type="email"
              placeholder="example@uefa.com"
              required
            />
          </label>

          <ButtonLink label="Login to Dashboard" to="/api/auth/signin" />
        </form>

        <small>
          <a href="mailto:yo@modular-everything.com?subject=Trouble logging in to UEFA Dashboard">
            Having trouble logging in?
          </a>
        </small>
      </>
    );
  }

  return (
    <S.ModalWrap>
      <UEFALogo />
      <S.LoginModal>{content}</S.LoginModal>
    </S.ModalWrap>
  );
}

LoginModal.propTypes = {
  status: PropTypes.string.isRequired,
  denyAccess: PropTypes.bool,
};

LoginModal.defaultProps = {
  denyAccess: false,
};
