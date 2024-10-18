import { Controller, Get, Render, UseFilters } from "@nestjs/common";


@Controller()
export class AppController
{

    @Get()
    @Render("main")
    getMainPage()
    {
        return {currentPath: "/"}
    }

    /*
    @Get()
    @Render("404")
    getNotFoundPage()
    {
        
    }
    */
}