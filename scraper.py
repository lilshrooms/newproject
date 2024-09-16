from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

def scrape_page(url):
    service = Service('path/to/chromedriver')  # Update this path
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')  # Run in headless mode
    driver = webdriver.Chrome(service=service, options=options)

    try:
        driver.get(url)
        time.sleep(5)  # Wait for the page to load

        records = {
            'Property Location': ''
        }

        # Find the property location
        prop_loc_element = driver.find_element(By.XPATH, "//font[contains(text(), 'Prop Loc:')]/following-sibling::font")
        if prop_loc_element:
            records['Property Location'] = prop_loc_element.text.strip()2
            print(f"Found Property Location: {records['Property Location']}")
        else:
            print("Couldn't find the value for Property Location")

    finally:
        driver.quit()

    return records

def main():
    url = "https://taxrecords-nj.com/pub/cgi/m4.cgi?district=0201&l02=020100101____00001_________M"
    print(f"Attempting to scrape URL: {url}")
    records = scrape_page(url)

    if records['Property Location']:
        print(f"\nProperty Location: {records['Property Location']}")
    else:
        print("No records found.")

if __name__ == "__main__":
    main()