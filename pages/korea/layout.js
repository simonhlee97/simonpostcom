import KoreaNav from "../../components/KoreaNav";

export default function Layout({ children }) {
  return (
    <div className="content">
      <KoreaNav />
      <div>
        {children}
      </div>
		</div>
  );
}
