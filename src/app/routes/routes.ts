import { RegisterComponent } from "../register/register.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { LoginComponent } from "../login/login.component";
import { AuthGuard } from "../auth.guard";
import { ProfileComponent } from "../profile/profile.component";
import { AuthedGuard } from "../authed.guard";
import { WallComponent } from "../profile/wall/wall.component";
import { EditProfileComponent } from "../profile/edit-profile/edit-profile.component";
import { CreateJokeComponent } from "../create-joke/create-joke.component";
import { HomeComponent } from "../home/home.component";

export const Routes = [
    {path:'auth/register',component:RegisterComponent,canActivate:[AuthedGuard]},
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
    {path:'auth/login',component:LoginComponent,canActivate:[AuthedGuard]},
    {
        path:'user/profile/:id',
        component:ProfileComponent,
        canActivate:[AuthGuard],
        children:[
            {path:'' ,  component:WallComponent},
            {path:'edit', component:EditProfileComponent}
        ]
    
    },
    {path:'create/joke',component:CreateJokeComponent},
    {path:'',component:HomeComponent}
]