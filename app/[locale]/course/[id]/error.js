"use client";
import { useTranslations } from "next-intl";
import { Link } from "../../../../navigation";

export default function Error() {
  const t = useTranslations("error");

  return (
    <div className="error_container" style={{ marginTop: "130px" }}>
      <div className="container text-center py-5">
        <div className="error_content">
          <h1 className="display-1">{t("title")}</h1>
          <p className="mb-4">{t("message")}</p>
          <div className="error_actions">
            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary me-3"
            >
              {t("tryAgain")}
            </button>
            <Link href="/" className="btn btn-outline-primary">
              {t("backHome")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
