import Head from "next/head";
import PropTypes from "prop-types";
import { useState } from "react";

import { LoginModal } from "../../elements/LoginModal";
import * as S from "./Login.styles";
import { Pattern } from "./LoginPattern";

export function Login({ status, denyAccess: access }) {
  const [denyAccess, setDenyAccess] = useState(access);

  return (
    <>
      <Head>
        <style>{`
          body {
            background-color: ${
              denyAccess ? "var(--uefa-lt-black)" : "var(--uefa-drk-grey)"
            }
          }
      `}</style>
      </Head>

      <S.Login>
        <div className="content">
          <LoginModal
            status={status}
            denyAccess={denyAccess}
            setDenyAccess={setDenyAccess}
          />
        </div>
        <Pattern />
      </S.Login>
    </>
  );
}

Login.propTypes = {
  status: PropTypes.string.isRequired,
  denyAccess: PropTypes.bool,
};

Login.defaultProps = {
  denyAccess: true,
};
