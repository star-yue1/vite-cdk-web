
import { useEffect } from 'react'
import { useNavigate } from "react-router";

function Redirect() {
  const navigate = useNavigate();
  const to = '/';
  const replace = true;
  useEffect(() => {
    navigate(to, { replace });
  });

  return <div></div>;
}

export default Redirect