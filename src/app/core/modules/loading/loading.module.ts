import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "./loading.component";
import { LoadingService } from "./loading.service";
import { LoadingInterceptor } from "./loading-interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
	declarations: [LoadingComponent],
	imports: [CommonModule],
	providers: [
		LoadingService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoadingInterceptor,
			multi: true,
		},
	],
	exports: [LoadingComponent],
})
export class LoadingModule {}
