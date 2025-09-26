import AppHeader from '../AppHeader'

export default function AppHeaderExample() {
  const handleMenuClick = () => console.log('Menu clicked');
  const handleSettingsClick = () => console.log('Settings clicked');

  return (
    <div>
      <AppHeader
        onMenuClick={handleMenuClick}
        onSettingsClick={handleSettingsClick}
      />
      <div className="p-4">
        <p className="text-muted-foreground">頁面內容會在這裡...</p>
      </div>
    </div>
  );
}