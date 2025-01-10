"use client";

import { Link } from "./StaticLinkButton.styles";
import { useState } from "react";
import useWindowDimensions from "../../../../hooks/useWindowDimensions.hook";
import { useRouter } from "next/navigation";

export default function StaticLinkButton() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [focus, setFocus] = useState(false);

  return (
    <Link
      width={width || 1440}
      focus={focus}
      onClick={() => {
        setFocus(true);
        router.push("/mieux-me-connaitre");
      }}
    >
      Mieux me connaitre
    </Link>
  );
}
