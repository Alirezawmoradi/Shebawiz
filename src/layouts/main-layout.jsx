import MainPage from "../main-page/main-page.jsx";

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen font-bold uppercase'>
            <header className='bg-gray-200 flex items-center justify-center h-20'>
                Header
            </header>
            <main className='flex-1 flex'>
                <MainPage/>
            </main>
            <footer className='bg-gray-200 flex items-center justify-center h-20'>
                Footer
            </footer>
        </div>
    )
}
export default MainLayout;