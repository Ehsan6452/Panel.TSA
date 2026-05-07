import { profileContentRoutes } from "./ProfileContent.routes";

export default function ProfileContent({ activeTab, type, subType }) {
  const typeRoutes = profileContentRoutes[type];

  if (!typeRoutes) {
    return (
      <section>
        <p style={{ color: "red" }}>Unknown profile type: {type}</p>
      </section>
    );
  }

  // اگر تب انتخاب شده مربوط به بخش specific باشد:
  if (activeTab === "specific") {
    const specificRoutes = typeRoutes.specific;

    if (!specificRoutes) {
      return (
        <section>
          <p style={{ color: "red" }}>
            No specific section defined for type: {type}
          </p>
        </section>
      );
    }

    const SpecificComponent = specificRoutes[subType];

    if (!SpecificComponent) {
      return (
        <section>
          <p style={{ color: "red" }}>
            No component defined for subType: {subType}
          </p>
        </section>
      );
    }

    return (
      <section className="flex-1 flex">
        <SpecificComponent />
      </section>
    );
  }

  // تب‌های غیرSpecific
  const TabComponent = typeRoutes[activeTab];

  if (!TabComponent) {
    return (
      <section>
        <p style={{ color: "red" }}>
          No component found for tab: {activeTab}
        </p>
      </section>
    );
  }

  return (
    <section className="flex-1 flex">
      <TabComponent />
    </section>
  );
}
