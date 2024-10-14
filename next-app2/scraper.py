from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os
import json

def scrape_page(url):
    chrome_driver_path = "/usr/local/bin/chromedriver"
    service = Service(chrome_driver_path)
    options = Options()
    options.add_argument('--headless')  # please run this in headless mode
    driver = webdriver.Chrome(service=service, options=options)

    try:
        driver.get(url)
        time.sleep(5)  # loading time

        records = {
            'Property Location': ''
        }

        # Wait for the element to be present
        prop_loc_element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//font[contains(text(), 'Prop Loc:')]/following-sibling::font"))
        )
        if prop_loc_element:
            records['Property Location'] = prop_loc_element.text.strip()
            print(f"Found Property Location: {records['Property Location']}")
        else:
            print("Couldn't find the value for Property Location")

    except selenium.common.exceptions.TimeoutException:
        print("Element not found within the given time")

    finally:
        driver.quit()

    return records

def save_to_file(records):
    if not os.path.exists('property_records'):
        os.makedirs('property_records')

    # unique filename based on timestamp and part of URL
    url_part = url[8:23]  # 15 chars after 'https://'
    filename = f"property_records/record_{url_part}_{int(time.time())}.json"

    # saving as JSON
    with open(filename, 'w') as f:
        json.dump(records, f, indent=4)

    print(f"Records saved to {filename}")

def main(): #insert url below"
    url = "https://taxrecords-nj.com/pub/cgi/m4.cgi?district=0201&l02=020100101____00005_________M&hist=1"
    print(f"Attempting to scrape URL: {url}")
    records = scrape_page(url)

    if records['Property Location']:
        print(f"\nProperty Location: {records['Property Location']}")
        save_to_file(records)
    else:
        print("No records found.")

if __name__ == "__main__":
    main()