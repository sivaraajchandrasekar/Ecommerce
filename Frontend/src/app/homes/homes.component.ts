import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {
  showSignOutOptions = false;

  data:User[]=[];

  user:any;

  constructor(private router: Router,private act:ActivatedRoute,private userser:UserService) {
    this.searchResults$ = this.searchTerms$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.searchProducts(term))
    );
  }
  ngOnInit(): void {
    this.userser.logged.subscribe((username) => {
      this.user = { username };
    });

  }
  loadUserData(): void {
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.data = JSON.parse(userData);
      console.log('Retrieved data:', this.data);
    }
  }
 

  login() {
    this.router.navigate(['login']);
  }

  home() {
    this.router.navigate(['home']);
  }

  onSearch(query: string) {
    const lowerCaseQuery = query.toLowerCase();

    if (lowerCaseQuery === 'mobiles') {
      this.router.navigate(['mobiles']);
    } else if (lowerCaseQuery === 'electronics') {
      this.router.navigate(['/electro']);
    } else if (lowerCaseQuery === 'iqoo') {
      this.router.navigate(['mobiles/iqoo']);
    } else if (lowerCaseQuery === 'iphone') {
      this.router.navigate(['mobiles/iphone']);
    } else if (lowerCaseQuery === 'pixel') {
      this.router.navigate(['/mobiles/vivo']);
    } else if (lowerCaseQuery === 'oneplus') {
      this.router.navigate(['mobiles/oneplus']);
    } else if (lowerCaseQuery === 'earphones') {
      this.router.navigate(['electro/ear']);
    } else if (lowerCaseQuery === 'watch') {
      this.router.navigate(['/electro/']);
    } else if (lowerCaseQuery === 'dress') {
      this.router.navigate(['/dress/']);
    } else if (lowerCaseQuery === 'women') {
      this.router.navigate(['/dress/women']);
    } else if (lowerCaseQuery === 'toy') {
      this.router.navigate(['/kids/toys']);
    }
    else if (lowerCaseQuery === 'accessories') {
      this.router.navigate(['/kids/access']);
    }
    else {
      this.router.navigate(['/search'], { queryParams: { q: lowerCaseQuery } });
    }
  }
  searchTerm = '';
  products = ['mobiles', 'dress', 'watch', 'women', 'men', 'iqoo', 'pixel', 'oneplus', 'iphone', 'electronics','toy','accessories'];
  private searchTerms$ = new Subject<string>();
  searchResults$: Observable<any>;
  searchProducts(term: string): Observable<string[]> {
    const filteredProducts = term === ''
      ? this.products
      : this.products.filter(
        (v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
      );

    return of(filteredProducts || []); 
  }
  onInputChange(): void {
    this.searchTerms$.next(this.searchTerm);
  }
  onSelect(event: any): void {
    const selectedValue = event?.item;
    if (selectedValue) {
      console.log('Selected value:', selectedValue);
      console.log('Before navigation');
      this.router.navigate([selectedValue]);
      console.log('After navigation');
    }
  }
  toggleSignOutOptions() {
    this.showSignOutOptions = !this.showSignOutOptions;
  }

  signOut() {
    this.userser.setLoggedInUser(null);
     localStorage.removeItem('userData'); 
    this.router.navigate(['']);
    console.log('Signing out...');
  }
}
