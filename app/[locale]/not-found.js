"use client";
import { useTranslations } from "next-intl";
import { Link } from "../../navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="not_found_container" style={{ marginTop: "130px" }}>
      <div className="container text-center py-5">
        <h1 className="display-1">404</h1>
        <h2 className="mb-4">{t("title")}</h2>
        <p className="mb-4">{t("message")}</p>
        <Link href="/" className="btn btn-primary">
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
} 