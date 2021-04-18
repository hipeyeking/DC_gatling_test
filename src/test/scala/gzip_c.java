import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.GZIPInputStream;
import java.util.zip.GZIPOutputStream;

public class gzip_c {
    public  final String GZIP_ENCODE_UTF_8 = "UTF-8";
    public  final String GZIP_ENCODE_ISO_8859_1 = "ISO-8859-1";


    public  byte[] compress(String str, String encoding) {
        if (str == null || str.length() == 0) {
            return null;
        }
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        GZIPOutputStream gzip;
        try {
            gzip = new GZIPOutputStream(out);
            gzip.write(str.getBytes(encoding));
            gzip.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return out.toByteArray();
    }

    public  byte[] compress(String str) throws IOException {
        return compress(str, GZIP_ENCODE_UTF_8);
    }

    public  byte[] uncompress(byte[] bytes) {
        if (bytes == null || bytes.length == 0) {
            return null;
        }
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        ByteArrayInputStream in = new ByteArrayInputStream(bytes);
        try {
            GZIPInputStream ungzip = new GZIPInputStream(in);
            byte[] buffer = new byte[256];
            int n;
            while ((n = ungzip.read(buffer)) >= 0) {
                out.write(buffer, 0, n);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return out.toByteArray();
    }

    public  String uncompressToString(byte[] bytes, String encoding) {
        if (bytes == null || bytes.length == 0) {
            return null;
        }
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        ByteArrayInputStream in = new ByteArrayInputStream(bytes);
        try {
            GZIPInputStream ungzip = new GZIPInputStream(in);
            byte[] buffer = new byte[256];
            int n;
            while ((n = ungzip.read(buffer)) >= 0) {
                out.write(buffer, 0, n);
            }
            return out.toString(encoding);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public  String uncompressToString(byte[] bytes) {
        return uncompressToString(bytes, GZIP_ENCODE_UTF_8);
    }

    public static void main(String[] args) throws IOException {
        String s = "[{\"ios.ios\":{\"common\":{\"message_id\":\"1\",\"project_id\":\"1cb00feb-456a-456c-85a7-b42e269b5d61\",\"app_id\":\"24969bdbc29d4d9ae6ffadb353e89332092a835f\",\"tenant_id\":\"c65a02414ffc1f1e54f257cb5f27325b6f1d0cec\",\"upload_time\":\"1618558311365\",\"Apex_id\":\"57AAD570-D38B-46AF-91A2-3C6D70D2FAA7\",\"session_id\":\"session_1618558288008\",\"app_version\":\"1.0\",\"app_package_id\":\"com.apex.ApexDataTracker\",\"carrier\":\"(null)\",\"mini_program_scene\":null,\"sdk_info\":{\"sdk_version\":\"1.0.0\",\"sdk_type\":\"ios\"},\"device_info\":{\"device_id\":\"\",\"device_model\":\"iPhone 8\",\"device_brand\":\"iphone\",\"device_type\":\"phone\",\"device_uuid\":\"57AAD570-D38B-46AF-91A2-3C6D70D2FAA7\",\"android_id\":\"\",\"imei\":\"\",\"mac\":\"\",\"user_agent\":\"\",\"idfa\":\"E15AF7BF-EF16-4828-BA06-78CBA67B9874\",\"idfv\":\"934B11F7-BFDD-4493-B1A2-D1FA27BEDC59\",\"oaid\":\"\"},\"screen\":{\"screen_height\":\"667\",\"screen_width\":\"375\"},\"os\":{\"os_system\":\"ios\",\"os_version\":\"13.6.1\"},\"browser\":null,\"wechat\":null,\"referrer_info\":null,\"market_name\":\"App Store\",\"utm_info\":null},\"events\":[{\"ios.click\":{\"click\":\"1\",\"event_code\":\"click_UICollectionViewCell(0:0)#/UICollectionView(0)/UIScrollView(0)/UITableViewCellContentView(0)/UITableViewCell(1:0)#/UITableView(0) => ViewController\",\"event_name\":\"图书\",\"event_type\":\"click\",\"send_type\":\"all\",\"page_type\":\"ios\",\"ts\":\"1618558311365\",\"network_type\":\"WIFI\",\"time_since_last_operation\":null,\"browse_time\":null,\"location_info\":{\"ip\":\"116.230.104.177\"},\"business_info\":{\"ios.business_info1\":{\"user_id\":{\"string\":\"\"},\"extentions\":{\"map\":{}}}},\"page_info\":{\"current_page_id\":{\"string\":\"ViewController\"},\"current_page_name\":{\"string\":\"首页\"},\"current_page_url\":null,\"current_page_host\":null,\"current_page_query\":null,\"current_page_path\":\"com.apex.ApexDataTracker/ViewController\",\"source_page_id\":{\"string\":\"\"},\"source_page_name\":{\"string\":\"\"},\"source_page_url\":null,\"source_page_host\":null,\"source_page_query\":null,\"source_page_path\":\"\"},\"coordinate_info\":null,\"element_info\":{\"ios.element_info_record1\":{\"element_id\":null,\"element_name\":null,\"element_target_url\":null,\"element_type\":null,\"element_content\":{\"string\":\"图书\"},\"element_selector\":null,\"element_position\":null,\"element_index\":null,\"element_tag_name\":null,\"element_class\":null,\"element_path\":{\"string\":\"UICollectionViewCell(0:0)#/UICollectionView(0)/UIScrollView(0)/UITableViewCellContentView(0)/UITableViewCell(1:0)#/UITableView(0) => ViewController\"}}},\"size_info\":null,\"event_code_md5\":\"cb1edae67e2be68f\"}}]}}]\n";
        System.out.println("字符串长度：" + s.length());
        gzip_c gzip_c = new gzip_c();
        System.out.println("压缩后：：" + gzip_c.compress(s).length);
        System.out.println("解压后：" + gzip_c.uncompress(gzip_c.compress(s)).length);
        System.out.println("解压字符串后：：" + gzip_c.uncompressToString(gzip_c.compress(s)).length());
    }

}